$.fn.setEqualHeight = function() {
    $this = this;

      var maxHeight = 0;
      $this.each(function() {
        if (maxHeight < $(this).height()) {
          maxHeight = $(this).height();
        }
      });
      $this.each(function() {
        $(this).height(maxHeight);
      });

}