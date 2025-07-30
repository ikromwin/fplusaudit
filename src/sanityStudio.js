import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 't40vn8ba',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-07-29',
})