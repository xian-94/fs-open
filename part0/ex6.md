sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa 
    activate server
    server-->>browser: message (with status code 201)
    deactivate server

    Note right of browser: The browser displays the newly added note 
    