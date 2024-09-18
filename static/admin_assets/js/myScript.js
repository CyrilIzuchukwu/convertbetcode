    $(document).ready(function() {
    // Event listener for form 1 submission
    $('#role').submit(function(event) {
        event.preventDefault(); // Prevent default form submission
        var formData = $(this).serialize(); // Serialize form data

        // AJAX request for form 1
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
            success: function(response) {
                $('#role-success-message').css('display', 'block');
                $('#role-success').text(response.role);
                $("#inputField").val("");
            },
            error: function(xhr, status, error) {
            $('#role-error-message').css('display', 'block');
            var errorMessage = '';

            try {
                // Parse JSON response if it's in JSON format
                var response = JSON.parse(xhr.responseText);
                errorMessage = response.message || 'An error occurred'; // Get message property or use a default message
            } catch (e) {
                // If parsing fails, use the entire response as error message
                errorMessage = xhr.responseText || 'An error occurred';
            }

            $('#role-error').text(errorMessage);
        }
        });
    });

    // Repeat the above process for form 2 and form 3
    $('#permission').submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
            success: function(response) {
                $('#permission-success-message').css('display', 'block');
                $('#permission-success').text(response.permission);
                $("#inputField").val("");
            },
            error: function(xhr, status, error) {
            $('#permission-error-message').css('display', 'block');
            var errorMessage = '';

            try {
                // Parse JSON response if it's in JSON format
                var response = JSON.parse(xhr.responseText);
                errorMessage = response.message || 'An error occurred'; // Get message property or use a default message
            } catch (e) {
                // If parsing fails, use the entire response as error message
                errorMessage = xhr.responseText || 'An error occurred';
            }

            $('#permission-error').text(errorMessage);
        }
        });
    });

    $('#assignPermission').submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
            success: function(response) {
                $('#assignPermission-success-message').css('display', 'block');
                $('#assignPermission-success').text(response.assignPermission);
            },
            error: function(xhr, status, error) {
            $('#assignPermission-error-message').css('display', 'block');
            var errorMessage = '';

            try {
                // Parse JSON response if it's in JSON format
                var response = JSON.parse(xhr.responseText);
                errorMessage = response.message || 'An error occurred'; // Get message property or use a default message
            } catch (e) {
                // If parsing fails, use the entire response as error message
                errorMessage = xhr.responseText || 'An error occurred';
            }

            $('#assignPermission-error').text(errorMessage);
        }
        });
    });

    $('#assignRoleToUser').submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
            success: function(response) {
                $('#assignRole-success-message').css('display', 'block');
                $('#assignRole-success').text(response.assignRole);
            },
            error: function(xhr, status, error) {
            $('#assignRole-error-message').css('display', 'block');
            var errorMessage = '';

            try {
                // Parse JSON response if it's in JSON format
                var response = JSON.parse(xhr.responseText);
                errorMessage = response.message || 'An error occurred'; // Get message property or use a default message
            } catch (e) {
                // If parsing fails, use the entire response as error message
                errorMessage = xhr.responseText || 'An error occurred';
            }

            $('#assignRole-error').text(errorMessage);
        }
        });
    });
});

function openModal(userId) {
  var modal = document.getElementById('assignRole');
  var userIdInput = document.getElementById('userIdInput');
  
  // Set the user ID in the input field
  userIdInput.value = userId;
  getUserRoles(userId);
  // Display the modal
  var button = document.getElementById('myButton');
    button.click();
}

function getUserRoles(userId) {
    $.ajax({
        url: "/admin/get_user_role",
        type: 'GET',
        data: { userId: userId },
        success: function(response) {
            // Assuming response.roles is an array of role IDs
            response.roles.forEach(function(roleId) {
                // Mark the checkbox corresponding to the role ID
                $('input[type="checkbox"][value="' + roleId + '"]').prop('checked', true);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error fetching user roles:', error);
        }
    });
}


    document.getElementById('UnCheckAllButton').addEventListener('click', function () {
        var checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
        $('input[type="checkbox"]').prop('checked', false);
        $('#assignRole-success-message').css('display', 'none');
        $('#assignRole-error-message').css('display', 'none');
    });
    document.getElementById('removeMessage').addEventListener('click', function () {
        $('#role-success-message').css('display', 'none');
        $('#role-error-message').css('display', 'none');
        
        });

    document.getElementById('removeMessage_').addEventListener('click', function () {
        $('#permission-success-message').css('display', 'none');
        $('#permission-error-message').css('display', 'none');
        
        });

        function getConversions(id){
            $.ajax({
                url: "admin/user-conversion-history/"+id ,
                type: 'GET',
                data: {},
                success: function(response) {
                    // console.log(response)
                    if(response.length > 0){
                        populateModal(response);
                    }else{
                        $('#noDataFound').text("No Conversion Found");
                    }
                    
                },
                error: function(xhr, status, error) {
                    console.error('Error fetching user roles:', error);
                }
            });
        }

        function populateModal(data) {
            const modalBody = document.querySelector('.conversion-history');
            // modalBody.innerHTML = ''; // Clear previous content
            const itemsContainer = document.createElement('div');
            itemsContainer.classList.add('items');
            data.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');
                itemDiv.innerHTML = `
                    
                    <div class="abs">
                        <span>${item.converted_from}</span>
                        <h6>${item.source_code}</h6>
                    </div>
                    <div class="swap-icon">
                        <i class="fa-solid fa-right-left"></i>
                    </div>
                    <div class="abs">
                        <span>${item.converted_to}</span>
                        <h6>${item.destination_code}</h6>
                    </div>`;
                itemsContainer.appendChild(itemDiv);
            });
            modalBody.appendChild(itemsContainer);
        }


        function closeModal(){
            const modalBody = document.querySelector('.conversion-history');
            modalBody.innerHTML = ''; // Clear previous content
        }
       
        
