function merge (dest, src, redefine=true) {
   if (!dest) {
      throw new TypeError('argument dest is required');
   }

   if (!src) {
      throw new TypeError('argument src is required');
   }

   return redefine ? Object.assign(dest, src) : Object.assign(src, dest);
}

module.exports = merge;

