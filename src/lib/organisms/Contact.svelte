<script>
import { enhance } from '$app/forms';

// Declare reactive variables to track submission state and messages
let isSubmitting = false;
let successMessage = '';
let errorMessage = '';

// Function to handle the form enhancement
function handleEnhance({ formElement }) {
    // Handle the form submission
    const handleSubmit = async ({ result }) => {
        // Reset submission state and messages
        isSubmitting = false;
        successMessage = '';
        errorMessage = '';

        // Handle the result of the form submission
        if (result.type === 'failure') {
            // Set error message if the submission failed
            errorMessage = result.data.error;
        } else if (result.type === 'success') {
            // Reset the form and set success message if the submission succeeded
            formElement.reset();
            successMessage = result.data.message;
        }
    };

    // Return the handleSubmit function to be used by the form
    return handleSubmit;
}
</script>

<form
	method="POST"
	use:enhance={handleEnhance}
	on:submit={() => (isSubmitting = true)}
	class="contact-form"
>
	<input type="hidden" name="subject" value="You have received a new message from your form." />
	<input type="text" name="name" placeholder="Joe Burger" required />
	<input type="email" name="email" placeholder="joeburger@gmail.com" required />
	<input type="message" name="message" placeholder="Message" required />

	{#if successMessage}
		<p class="success-message">{successMessage}</p>
	{/if}

	{#if errorMessage}
		<p class="error-message">{errorMessage}</p>
	{/if}

	<button type="submit" class="submit-button" disabled={isSubmitting}>
		{#if isSubmitting}
			Sending...
		{:else}
			Send
		{/if}
	</button>
</form>