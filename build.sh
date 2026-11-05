#!/bin/sh
# Compatibility entry point; development and production share tools/build-options.mjs.
set -eu
cd "$(dirname "$0")"
exec node tools/build.mjs
