# Namste React Notes
- Cross-Origin Resource Sharing (CORS):  
It is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) 
other than its own from which a browser should permit loading resources.
Browsers make a "preflight" request using HTTP OPTIONS method to the server hosting the cross-origin resource, in order to check that the server will permit the actual request.

- crossorigin attribute:
Request uses CORS headers and  There is no exchange of user credentials via cookies, client-side SSL certificates or HTTP authentication, 
unless destination is the same origin.
eg.
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
