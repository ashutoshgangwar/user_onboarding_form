<script>
    function sendOTP() {
        // Get the mobile number entered by the user
        const mobileNumber = document.getElementById("mname").value;

        // In a real-world scenario, you would make an API call to the server here to send the mobile number
        // and get the OTP in response. For this example, we'll use a mock OTP (123456) as the response.
        const mockOTP = "123456";

        // Display the OTP in the OTP input field
        document.getElementById("otp").value = mockOTP;
    }
</script>
