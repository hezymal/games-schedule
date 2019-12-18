# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Schedule.Repo.insert!(%Schedule.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias Schedule.{Repo, Game, GameDescription}

game = Repo.insert! %Game{name: "Cyberpunk 2047", day: 16, month: 4, year: 2020}
Repo.insert! %GameDescription{
  logo_url: "https://www.cyberpunk.net/build/images/home/cover-1920-en-527c5659.jpg",
  platforms: "PC, PS4, XBox One",
  url: "https://www.cyberpunk.net/",
  game_id: game.id
}
