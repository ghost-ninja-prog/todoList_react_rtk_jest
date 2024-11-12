export const loadingData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
        
        if (!response.ok) {
            return 'Can\'t fetch todo. Server error!!!'
        }
        return response.json()
}