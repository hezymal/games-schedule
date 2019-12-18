defmodule ScheduleWeb.Router do
  use ScheduleWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ScheduleWeb do
    pipe_through :api

    get "/index", PageController, :index
  end
end
