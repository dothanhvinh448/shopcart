jQuery(document).ready(function($)
{
    initQuantity();
    function initQuantity()
  {
      if($('.plus').length && $('.minus').length)
      {
          var plus = $('.plus');
          var minus = $('.minus');
          var value = $('#quantity_value');

          plus.on('click', function()
          {
              var x = parseInt(value.text());
              value.text(x + 1);
          });

          minus.on('click', function()
          {
              var x = parseInt(value.text());
              if(x > 1)
              {
                  value.text(x - 1);
              }
          });
      }
  }
  initTabs();
  function initTabs()
	{
		if($('.tabs').length)
		{
			var tabs = $('.tabs li');
			var tabContainers = $('.tab_container');

			tabs.each(function()
			{
				var tab = $(this);
				var tab_id = tab.data('active-tab');

				tab.on('click', function()
				{
					if(!tab.hasClass('active'))
					{
						tabs.removeClass('active');
						tabContainers.removeClass('active');
						tab.addClass('active');
						$('#' + tab_id).addClass('active');
					}
				});
			});
		}
	}
});