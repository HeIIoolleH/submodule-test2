# cp dist/mjs/index.d.ts dist 

# rm -rf dist/*/index.d.ts 

cat >dist/package.json <<!EOF
{
    "type": "commonjs"s
}
!EOF

# cat >dist/mjs/package.json <<!EOF
# {
#     "type": "module"
# }
# !EOF