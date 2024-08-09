// lib/useCreateSource.ts
import { useMutation } from 'react-query'

const createSource = async (): Promise<any> => {
  const url = 'https://airbyte.fractalgrid.ai/api/v1/sources/create'
  const username = 'airbyte'
  const password = 'password'

  const authHeader =
    'Basic ' + Buffer.from(`${username}:${password}`).toString('base64')

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: authHeader
    },
    body: JSON.stringify({
      sourceDefinitionId: '36c891d9-4bd9-43ac-bad2-10e12756272c',
      connectionConfiguration: {
        user: 'user-test',
        sourceType: 'api',
        credentials: {
          credentials_title: 'Private App Credentials',
          access_token: 'pat-na1-0279a7df-1894-42ae-8681-b9424862efda'
        }
      },
      workspaceId: '209d8e82-16b0-46e5-9068-cf08e6734e84',
      name: 'HubSpot-0'
    })
  }

  /* 
  {
    "sourceDefinitionId": "36c891d9-4bd9-43ac-bad2-10e12756272c",
    "sourceId": "b37c87f3-50b3-4a51-8c84-3a8f91487236",
    "workspaceId": "209d8e82-16b0-46e5-9068-cf08e6734e84",
    "connectionConfiguration": {
        "user": "user-test",
        "sourceType": "api",
        "credentials": {
            "access_token": "**********",
            "credentials_title": "Private App Credentials"
        }
    },
    "name": "HubSpot",
    "sourceName": "HubSpot",
    "icon": "https://connectors.airbyte.com/files/metadata/airbyte/source-hubspot/latest/icon.svg",
    "isVersionOverrideApplied": false,
    "supportState": "supported"
}
  */

  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const useCreateSource = () => {
  return useMutation<any, Error>(createSource)
}
