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

- normal vs async vs defer

Normal: 
   - parsing html line by line - stops parsing - download script - execute script - continue parsing. (more blocking in rendering)
async:
   - parsing html line by line - downloads script in background - stops parsing - execute script - continue parsing. (less blocking in rendering)
defer:
   - parsing html line by line - downloads script in background - completes HTML parsing first - execute script
