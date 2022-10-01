---
inject: true
to: src/components/<%= dir %>/index.ts
skip_if: src/components/<%= dir %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
append: true
---
export { default as <%= h.changeCase.pascal(name) %> } from "./<%= h.changeCase.pascal(name) %>";