import { fail } from '@sveltejs/kit';
import { GraphQLClient } from 'graphql-request';
import fetch from 'node-fetch';

// Define the Hygraph client
const hygraph = new GraphQLClient('https://api.hygraph.com/v2/your-endpoint', {
    headers: {
        authorization: `Bearer YOUR_HYGRAPH_API_TOKEN`
    }
});

// Example GraphQL query
const query = `
{
    posts {
        title
        content
    }
}
`;

// Load function to fetch data from Hygraph
export async function load() {
    try {
        const data = await hygraph.request(query);
        return {
            data
        };
    } catch (error) {
        console.error('Error fetching data from Hygraph:', error);
        return {
            error: 'Failed to fetch data'
        };
    }
}

// Actions object to handle form submission
/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Validate form data
        const validationResult = validateFormData(name, email, message);
        if (validationResult.error) {
            return fail(400, {
                error: validationResult.error,
                values: { name, email, message }
            });
        }

        // Prepare payload
        const payload = preparePayload(name, email, message);

        try {
            // Send API request
            const result = await sendApiRequest(payload);

            if (result.success) {
                return {
                    success: true,
                    message: 'Your message has been sent successfully!',
                    values: { name: '', email: '', message: '' }
                };
            } else {
                return fail(500, {
                    error: 'Something went wrong. Please try again!',
                    values: { name, email, message }
                });
            }
        } catch (err) {
            return fail(500, {
                error: 'Something went wrong. Please try again!',
                values: { name, email, message }
            });
        }
    }
};

// Function to validate form data
function validateFormData(name, email, message) {
    if (!name || !email || !message) {
        return { error: 'Form incorrectly filled out!' };
    }
    return { error: null };
}

// Function to prepare payload for the API request
function preparePayload(name, email, message) {
    return {
        access_key: '70b08551-9494-4522-84c1-091057459db9',
        name: name,
        email: email,
        message: message
    };
}

// Function to send API request
async function sendApiRequest(payload) {
    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    const result = await response.json();

    return {
        success: response.ok,
        result
    };
}
