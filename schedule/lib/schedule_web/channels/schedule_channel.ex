defmodule ScheduleWeb.ScheduleChannel do
  use Phoenix.Channel
  import Ecto.Query
  alias Schedule.{Repo, Game, GameDescription}

  def join("schedule:user", _message, socket) do
    {:ok, socket}
  end

  def handle_in("games", _message, socket) do
    games = Repo.all from g in Game
    push socket, "games", %{games: games}
    {:noreply, socket}
  end

  def handle_in("game", request, socket) do
    query = from d in GameDescription,
      where: d.game_id == ^request["id"]
    game = Repo.one query
    push socket, "game", game
    {:noreply, socket}
  end
end
