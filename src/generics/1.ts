import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error.message}`);
  }
}

async function exampleUsage() {
  try {
    const users = await fetchData<any[]>('https://jsonplaceholder.typicode.com/users');
    console.log('Users:', users[0].name);
  } catch (error: any) {
    console.error('Error fetching users:', error.message);
  }
}

exampleUsage();

export {};