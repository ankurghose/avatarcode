document.getElementById('get-character').addEventListener('click', async function() {
    try {
        const response = await fetch('https://last-airbender-api.fly.dev/api/v1/characters?perPage=10&page=5');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const characters = await response.json();
        const randomIndex = Math.floor(Math.random() * characters.length);
        const character = characters[randomIndex];
        const { name, photoUrl } = character;

        document.getElementById('character-image').src = photoUrl || 'default-image.png';
        document.getElementById('character-name').textContent = name;

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
});
