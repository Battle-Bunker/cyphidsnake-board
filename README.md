# Battlesnake Game Board
The board project is used to visualize and replay Battlesnake games, specifically made for the [CyphidSnake](https://github.com/Battle-Bunker/cyphid-snake) **paradigm**

## Development Server
We recomend using [replit](repl.it) and SSH-ing into this repo using VSCode or any similar tool becuase replit doen't support Svelte

## Required Parameters

 - A valid `game` ID is required to be passed as a URL parameter. For example:
`http://127.0.0.1/?game=ASDF-1234-QWER-6789`.
 - Also, an `ENGINE_URL` secret/environment variable has to be configured, otherwise this repo will default to `engine.battlesnake.com`

## Playback Settings

Playback settings are used to control playback speed, visual theme, media controls, etc. Some settings are persisted in local storage, and all settings can be overridden using URL parameters.

See [lib/settings](src/lib/settings) for more details.

### Persisted Settings

These values are configurable in the UI and persisted in local storage. They can also be overridden using URL parameters.

- `autoplay: boolean` - Start playback as soon as game is loaded. Defaults to false.
- `fps: number` - Playback speed, defined in 'frames per second'. Defaults to 6.
- `showCoords: boolean` - Display coordinates on game board. Defaults to false.
- `theme: string` - Display theme. Defaults to 'system'.

### Other Settings

These values can be set with URL parameters and are not persisted between games.

- `engine: string` - Stream game data from an alternate game engine.
- `loop: boolean` - Loops playback when game is finished. Defaults to false.
- `showControls: boolean` - Displays playback controls under the game board. Defaults to true.
- `showScoreboard: boolean` - Displays scoreboard to right of game board. Defaults to true.
- `title: string` - Display a title above the board. Defaults to empty string.
- `turn: int` - Start playback on a specific turn. Defaults to 0.

## Tests & Linting

Formatting is enforced with prettier, and linting is enforced with eslint.

Playwright is included in the repo but not yet in use becuase the original devs were lazy and the current ones don't know.

## Usage

The board project is intended to be used
