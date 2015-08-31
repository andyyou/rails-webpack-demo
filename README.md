# Integrate Rails with Webpack using Foreman

# Debug

Using `pry-remote` instead of `pry-rails`, after config it in gemfile and excute bundle.
You have to change `binding.pry` to `binding.remote_pry` in breakpoint you want.

When the breakpoint is hit, pry-remote will block your app and open up a DRb endpoint that a client can connect to. Running pry-remote in a shell will then connect to the session and you’ll be able to interact with Pry as you normally would.

`Ctrl + d` or `exit` in the Pry session to unblock the application.

[The toturial](https://www.bignerdranch.com/blog/debugging-remote-processes-with-pry-remote/)