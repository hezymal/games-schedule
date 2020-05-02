defmodule ScheduleWeb.ScheduleController do
  use ScheduleWeb, :controller
  import Ecto.Query
  alias Schedule.{Repo, Game}

  def year(conn, %{"year" => year}) do
    query = from g in Game, where: g.year == ^year
    games = Repo.all query
    json(conn, games)
  end
end
