#
#   DIST.sh
#
#   David Janes
#   IOTDB
#   2014-12-04
#
#   Distribute iotdb-timers to NPM
#

DO_NPM_IOTDB_PACKAGE=true
DIST_ROOT=/var/tmp/iotdb-timers.dist.$$
IOTDB_ROOT=$HOME/iotdb

if [ ! -d "$DIST_ROOT" ]
then
    mkdir "$DIST_ROOT"
fi

if $DO_NPM_IOTDB_PACKAGE
then
    echo "=================="
    echo "NPM Packge: iotdb"
    echo "=================="
    (
        NPM_SRC=../iotdb-timers
        cd $NPM_SRC || exit 1

        NPM_DST=$DIST_ROOT/iotdb-timers
        echo "NPM_DST=$NPM_DST"

        if [ -d ${NPM_DST} ]
        then
            rm -rf "${NPM_DST}"
        fi
        mkdir "${NPM_DST}" || exit 1

        update-package --increment-version || exit 1

        tar cf - \
            --exclude "xx*" \
            --exclude "yy*" \
            README.md \
            LICENSE.txt \
            *.js *.json \
            timers/*js |
        ( cd "${NPM_DST}" && tar xvf - && npm publish ) || exit 1
        git commit -m "new release" package.json || exit 1
        git push || exit 1

        echo "end"
    )
fi
