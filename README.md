# Integrate Rails with Webpack using Foreman


# Use Componet in views
We don't use `react-rails` in this project then also has no `react_componet` helper.
In this demo project I use jQuery to finish the same ability of `react_component`

Just use `data-component` and `data-props` like as follow (It's slim example): 

```
- data = {comments: @comments}.to_json
div data-component="Comments" data-props="#{data}"
```

# css-modules

Using [react-css-modules](https://github.com/gajus/react-css-modules) 
Setup follow [webpack demo](https://github.com/css-modules/webpack-demo)


# Debug

Using `pry-remote` instead of `pry-rails`, after config it in gemfile and excute bundle.
You have to change `binding.pry` to `binding.remote_pry` in breakpoint you want.

When the breakpoint is hit, pry-remote will block your app and open up a DRb endpoint that a client can connect to. Running pry-remote in a shell will then connect to the session and you’ll be able to interact with Pry as you normally would.

`Ctrl + d` or `exit` in the Pry session to unblock the application. Find detal [here](https://www.bignerdranch.com/blog/debugging-remote-processes-with-pry-remote/)