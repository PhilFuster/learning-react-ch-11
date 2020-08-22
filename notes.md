# Chapter 11 Learning React by Eve Porcello & Alex Banks

## React Router

React Router is a declarative way to define routes for an application.

The book showed us v6 through the experimental build. At time of reading the book (082220) React Router v6 is in beta. With some changes to the API.

Redirect component does not work. The way I got a redirect to work was using the useNavigate hook and calle the navigate function in a useEffect hook. It'll still render the 404 at first but it'll quickly redirect to the link.

I tried both ways of doing React Router configuration. I tried the object definition and the more xml approach. I think I like the way the xml one looks more
