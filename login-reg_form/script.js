$(document).ready(function () {
    $('.sortCreatedAt').on('change', function () {
        var selectedValue = $(this).val();
        var rows = $('tbody > tr');

        rows.sort(function (a, b) {
            var valA = $(a).find('td:last-child').text();
            var valB = $(b).find('td:last-child').text();

            var dateA = new Date(valA.split('-').reverse().join('-'));
            var dateB = new Date(valB.split('-').reverse().join('-'));

            if (selectedValue === 'descending') {
                return dateB.getTime() - dateA.getTime();
            } else {
                return dateA.getTime() - dateB.getTime();
            }
        });

        $('tbody').empty().append(rows);
    });

    // Initial sorting on page load
    $('.sortCreatedAt').trigger('change');
});
$(document).ready(function () {
    // Sorting functionality (existing code)

    // Search functionality
    $('.filter_input_width').on('input', function () {
        var filterValues = [];
        $('.filter_input_width').each(function () {
            filterValues.push($(this).val().toLowerCase());
        });

        var visibleRows = $('tbody > tr').filter(function () {
            var rowText = $(this).text().toLowerCase();

            for (var i = 0; i < filterValues.length; i++) {
                if (filterValues[i] !== '' && rowText.indexOf(filterValues[i]) === -1) {
                    return false;
                }
            }

            return true;
        });

        $('tbody > tr').hide();
        visibleRows.show();

        checkIfDataNotFound();
    });
    // Handle delete button click
    $('.deleteBtn').on('click', function () {
        var selectedCheckboxes = $('input[type="checkbox"]:checked');

        selectedCheckboxes.each(function () {
            // Assuming each checkbox corresponds to a row to be deleted
            $(this).closest('tr').remove();
        });

        // Hide delete button after deletion
        $(this).hide();

        checkIfDataNotFound();
    });

    // Initial sorting on page load
    $('.sortCreatedAt').trigger('change');

    function checkIfDataNotFound() {
        var visibleRows = $('tbody > tr:visible');
        var statusColumn = $('.dataNotFound');

        if (visibleRows.length === 0) {
            statusColumn.show();
        } else {
            statusColumn.hide();
        }
    }
});
$('tbody').on('change', 'input[type="checkbox"]', function () {
    var selectedCheckboxes = $('input[type="checkbox"]:checked');
    var deleteBtn = $('.deleteBtn');

    if (selectedCheckboxes.length > 0) {
        deleteBtn.show();
    } else {
        deleteBtn.hide();
    }
});

// ... Existing code ...

// Handle delete button click
$('.deleteBtn').on('click', function () {
    var selectedCheckboxes = $('input[type="checkbox"]:checked');

    selectedCheckboxes.each(function () {
        // Assuming each checkbox corresponds to a row to be deleted
        $(this).closest('tr').remove();
    });

    // Hide delete button after deletion
    $(this).hide();

    checkIfDataNotFound();
});

// ... Existing code ...




{/* <script>
$(document).ready(function () {
    $('.sortCreatedAt').on('change', function () {
        var selectedValue = $(this).val();
        var rows = $('tbody > tr');

        rows.sort(function (a, b) {
            var valA = $(a).find('td:last-child').text();
            var valB = $(b).find('td:last-child').text();

            var dateA = new Date(valA.split('-').reverse().join('-'));
            var dateB = new Date(valB.split('-').reverse().join('-'));

            if (selectedValue === 'descending') {
                return dateB.getTime() - dateA.getTime();
            } else {
                return dateA.getTime() - dateB.getTime();
            }
        });

        $('tbody').empty().append(rows);
    });

    // Initial sorting on page load
    $('.sortCreatedAt').trigger('change');
});
$(document).ready(function () {
    // Sorting functionality (existing code)

    // Search functionality
    $('.filter_input_width').on('input', function () {
        var filterValues = [];
        $('.filter_input_width').each(function () {
            filterValues.push($(this).val().toLowerCase());
        });

        var visibleRows = $('tbody > tr').filter(function () {
            var rowText = $(this).text().toLowerCase();

            for (var i = 0; i < filterValues.length; i++) {
                if (filterValues[i] !== '' && rowText.indexOf(filterValues[i]) === -1) {
                    return false;
                }
            }

            return true;
        });

        $('tbody > tr').hide();
        visibleRows.show();

        checkIfDataNotFound();
    });
    // Handle delete button click
    $('#deleteBtn').on('click', function () {
        var selectedCheckboxes = $('input[type="checkbox"]:checked');

        selectedCheckboxes.each(function () {
            // Assuming each checkbox corresponds to a row to be deleted
            $(this).closest('tr').remove();
        });

        // Hide delete button after deletion
        $(this).hide();

        checkIfDataNotFound();
    });

    // Initial sorting on page load
    $('.sortCreatedAt').trigger('change');

    function checkIfDataNotFound() {
        var visibleRows = $('tbody > tr:visible');
        var statusColumn = $('#dataNotFound');

        if (visibleRows.length === 0) {
            statusColumn.show();
        } else {
            statusColumn.hide();
        }
    }
});
$('tbody').on('change', 'input[type="checkbox"]', function () {
    var selectedCheckboxes = $('input[type="checkbox"]:checked');
    var deleteBtn = $('#deleteBtn');

    if (selectedCheckboxes.length > 0) {
        deleteBtn.show();
    } else {
        deleteBtn.hide();
    }
});

// ... Existing code ...

// Handle delete button click
$('#deleteBtn').on('click', function () {
    var selectedCheckboxes = $('input[type="checkbox"]:checked');

    selectedCheckboxes.each(function () {
        // Assuming each checkbox corresponds to a row to be deleted
        $(this).closest('tr').remove();
    });

    // Hide delete button after deletion
    $(this).hide();

    checkIfDataNotFound();
});

// ... Existing code ...
</script> */}