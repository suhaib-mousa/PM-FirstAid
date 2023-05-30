$(document).ready(function() {
      $('#search-form').submit(function(e) {
        e.preventDefault();
        
        var searchText = $('#search-input').val();
        if (searchText == null || searchText === '') {
          return;
        }

        $('#search').modal('show');
        var $searchModal = $('.search-body');
    
        $searchModal.empty();
    
        var itContains = false;
        $('.modal-body').each(function() {
          var modalBodyText = $(this).text().toLowerCase();
          if (modalBodyText.includes(searchText)) {
            $(this).clone().appendTo($searchModal);
            $searchModal.append('<hr />');
            itContains = true;
          }
        });

        if(!itContains){
          $searchModal.text('No results found.');
        }

    });
});