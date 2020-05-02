defmodule ScheduleWeb.PageController do
  use ScheduleWeb, :controller

  def index(conn, _params) do
    json(conn, %{id: 10})
  end
end
