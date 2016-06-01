/**
 * This polyfills the awesome element remove method
 * https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
 */
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}
