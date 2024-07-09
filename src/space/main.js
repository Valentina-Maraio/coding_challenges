document.addEventListener('DOMContentLoaded', () => {
    const dataDiv = document.getElementById('data');

    async function fetchSpaceWeatherData() {
        const url = "https://services.swpc.noaa.gov/products/alerts.json";

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log(data); // Print the data to console to inspect its structure
                displayData(data);
            } else {
                dataDiv.textContent = `Failed to fetch data. HTTP Status code: ${response.status}`;
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            dataDiv.textContent = 'Error fetching data.';
        }
    }

    function displayData(data) {
        dataDiv.innerHTML = '';  // Clear existing content

        if (!data || data.length === 0) {
            dataDiv.textContent = 'No alerts at this time.';
            return;
        }

        data.forEach(alert => {
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert';
            alertDiv.innerHTML = `
                <h2>${alert.message}</h2>
                <p><strong>Issue Time:</strong> ${alert.issue_time || 'Not specified'}</p>
                <p><strong>Effective Time:</strong> ${alert.effective_time || 'Not specified'}</p>
                <p><strong>Message Type:</strong> ${alert.message_type || 'Not specified'}</p>
            `;
            dataDiv.appendChild(alertDiv);
        });
    }

    fetchSpaceWeatherData();
});
