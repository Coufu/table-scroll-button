;(function ($) {

  /**
   * Handles adding the table scroll button.
   *
   * @param element
   */
  const addTableScrollButton = function (element) {
    $(window).on('load resize', function () {
      // const viewsTables = $('.views-table');
      const viewsTables = element;

      viewsTables.each(function (i) {
        const table = $(viewsTables[i]);
        const tableWidth = table.width();
        const parent = table.parent();
        const parentWidth = parent.width();

        if (tableWidth > parentWidth) {
          parent.prepend('<button class="button--table-scroll">Scroll table right</button>');
        }
        else {
          parent.find('.button--table-scroll').remove();
        }
      });
    });
  };

  /**
   * Handle scrolling one screen on click.
   */
  const handleTableScrollButtonClick = function () {
    $('body').on('click', '.button--table-scroll', function(e) {
      e.preventDefault();

      const table = $(this).next('table');
      const tableScrollPosition = table.position();
      const parent = $(this).parent();
      const parentWidth = parent.width();

      parent.animate({
        scrollLeft: Math.abs(tableScrollPosition.left) + parentWidth
      }, 1000);
    });
  };

  /**
   * Handle when to hide the button.
   *
   * @param element
   */
  const handleTableScrollButtonHide = function (element) {
    element.parent().on('scroll', function () {
      const table = $(this).find('.views-table');
      const tableScrollPosition = table.position();
      const tableWidth = table.width();
      const parent = $(this).parent();
      const parentWidth = parent.width();
      const tableRight = Math.ceil(Math.abs(tableScrollPosition.left)) + parentWidth;
      const button = $(this).find('.button--table-scroll');

      // Give 1 pixel of wiggle room to hide the button.
      if (tableRight >= tableWidth - 1) {
        button.addClass('js-hidden');
      }
      else {
        button.removeClass('js-hidden');
      }
    });
  };

  /**
   * Handle the vertical position of the scroll button.
   *
   * @param element
   */
  const handleTableScrollButtonPosition = function (element) {
    $(window).on('load resize', function () {
      const viewportHeight = $(window).height();
      const tables = element;

      tables.each(function (i) {
        const table = $(tables[i]);

        // If this table has a button.
        if (table.parent().find('.button--table-scroll').length > 0) {
          const tableHeight = table.height();
          const smallerOfWindowOrTable = Math.ceil(Math.min(viewportHeight, tableHeight));
          const button = table.parent().find('.button--table-scroll');

          button.attr('style', 'transform: translateY(' + (smallerOfWindowOrTable / 2) + 'px)');
        }
      });
    });
  };

  /**
   * Jquery plugin entry point.
   *
   * @returns {jQuery}
   */
  $.fn.tableScrollButton = function () {
    addTableScrollButton(this);
    handleTableScrollButtonClick();
    handleTableScrollButtonHide(this);
    handleTableScrollButtonPosition(this);
    return this;
  };

}(jQuery));
