import p5 from 'p5';

new p5((s) => {
  const grid = 360;
  const gf = 0.9;

  const icons = [
    'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNzkuNTEgNTMuNjkiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNDM1MzhmO3N0cm9rZTojZmZmO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7fTwvc3R5bGU+PHN5bWJvbCBpZD0iTmV3X1N5bWJvbF81IiBkYXRhLW5hbWU9Ik5ldyBTeW1ib2wgNSIgdmlld0JveD0iMCAwIDE0MS4zNCA5NS4zMyI+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjIuODYgOTIuNzQgMi44NiAxMi45OSA4LjYgMiA0My4wOSAyIDQ4Ljg0IDEyLjE1IDExMy4wMyAxMi4xNSAxMTMuMDMgOTIuNzQgMi44NiA5Mi43NCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxMTMuMDMgOTMuMzMgMi44NiA5My4zMyAyOC4zMSAyMy40IDEzOC40OSAyMy40IDExMy4wMyA5My4zMyIvPjwvc3ltYm9sPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjx1c2Ugd2lkdGg9IjE0MS4zNCIgaGVpZ2h0PSI5NS4zMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4zIDAuOTEpIHNjYWxlKDAuNTQpIiB4bGluazpocmVmPSIjTmV3X1N5bWJvbF81Ii8+PC9nPjwvZz48L3N2Zz4=',
    'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjEuNDkgNzYuMTUiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNDM1MzhmO30uY2xzLTEsLmNscy0ye3N0cm9rZTojZmZmO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7fS5jbHMtMntmaWxsOm5vbmU7fTwvc3R5bGU+PHN5bWJvbCBpZD0iTmV3X1N5bWJvbF82IiBkYXRhLW5hbWU9Ik5ldyBTeW1ib2wgNiIgdmlld0JveD0iMCAwIDEwOS42NyAxMzYuNjEiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxMDcuNjcgMTguMTkgMTA3LjY3IDEzNC42MSAyIDEzNC42MSAyIDIgODkuNDMgMiAxMDcuNjcgMTguMTkiLz48cG9seWxpbmUgY2xhc3M9ImNscy0yIiBwb2ludHM9IjEwNy42NyAxOC4xOSA4OS40MyAxOC4xOSA4OS40MyAyIi8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iMTguNjUiIHkxPSIyOC41NCIgeDI9IjU5LjgiIHkyPSIyOC41NCIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjE4LjY1IiB5MT0iNDMuMzMiIHgyPSI5MS4wMiIgeTI9IjQzLjMzIi8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iMTguNjUiIHkxPSI1OC4xMyIgeDI9IjkxLjAyIiB5Mj0iNTguMTMiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSIxOC42NSIgeTE9IjcyLjkyIiB4Mj0iOTEuMDIiIHkyPSI3Mi45MiIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjE4LjY1IiB5MT0iODcuNzEiIHgyPSI5MS4wMiIgeTI9Ijg3LjcxIi8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iMTguNjUiIHkxPSIxMDIuNTEiIHgyPSI5MS4wMiIgeTI9IjEwMi41MSIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjE4LjY1IiB5MT0iMTE3LjMiIHgyPSI5MS4wMiIgeTI9IjExNy4zIi8+PC9zeW1ib2w+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHVzZSB3aWR0aD0iMTA5LjY3IiBoZWlnaHQ9IjEzNi42MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC45MSAwLjkxKSBzY2FsZSgwLjU0KSIgeGxpbms6aHJlZj0iI05ld19TeW1ib2xfNiIvPjwvZz48L2c+PC9zdmc+',
    'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjMuMTEgNzYuNDYiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNDM1MzhmO30uY2xzLTEsLmNscy0yLC5jbHMtM3tzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4O30uY2xzLTJ7ZmlsbDpub25lO30uY2xzLTN7ZmlsbDojZmZmO308L3N0eWxlPjxzeW1ib2wgaWQ9Ik5ld19TeW1ib2xfNyIgZGF0YS1uYW1lPSJOZXcgU3ltYm9sIDciIHZpZXdCb3g9IjAgMCAxMTIuNjUgMTM3LjE4Ij48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMiAxMzUuMTggMiAyIDExMC42NSAyIDExMC42NSAxMzUuMTggMiAxMzUuMTgiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik04OC42OSw0NS43NCIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTg4LjY5LDEwLjQ4Ii8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iNzkuNDUiIHkxPSIxMy40NiIgeDI9Ijc5LjQ1IiB5Mj0iNDUuNzQiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSI3MC4yIiB5MT0iMTAuNDgiIHgyPSI3MC4yIiB5Mj0iNDUuNzQiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSI2MC45NSIgeTE9IjEwLjQ4IiB4Mj0iNjAuOTUiIHkyPSI0NS43NCIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjUxLjciIHkxPSIxMC40OCIgeDI9IjUxLjciIHkyPSIzMy45MSIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjQyLjQ1IiB5MT0iMTMuNDYiIHgyPSI0Mi40NSIgeTI9IjQ1Ljc0Ii8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iMzMuMjEiIHkxPSIxMC40OCIgeDI9IjMzLjIxIiB5Mj0iNDUuNzQiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSIyMy45NiIgeTE9IjEwLjQ4IiB4Mj0iMjMuOTYiIHkyPSI0NS43NCIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9Ijk3Ljk0IiB5MT0iMTAuNDgiIHgyPSI5Ny45NCIgeTI9IjQ1Ljc0Ii8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iMTQuNzEiIHkxPSIxMC40OCIgeDI9IjE0LjcxIiB5Mj0iNDUuNzQiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSI4OC42OSIgeTE9IjUxLjM5IiB4Mj0iODguNjkiIHkyPSI4Ni42NCIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9Ijc5LjQ1IiB5MT0iNTEuMzkiIHgyPSI3OS40NSIgeTI9Ijg2LjY0Ii8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iNzAuMiIgeTE9IjUxLjM5IiB4Mj0iNzAuMiIgeTI9IjY5LjAyIi8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iNjAuOTUiIHkxPSI1MS4zOSIgeDI9IjYwLjk1IiB5Mj0iNjkuMDIiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSI1MS43IiB5MT0iNTEuMzkiIHgyPSI1MS43IiB5Mj0iNjkuMDIiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSI0Mi40NSIgeTE9IjUxLjM5IiB4Mj0iNDIuNDUiIHkyPSI2OS4wMiIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjMzLjIxIiB5MT0iNTEuMzkiIHgyPSIzMy4yMSIgeTI9Ijg2LjY0Ii8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iMjMuOTYiIHkxPSI1MS4zOSIgeDI9IjIzLjk2IiB5Mj0iODYuNjQiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSI5Ny45NCIgeTE9IjUxLjM5IiB4Mj0iOTcuOTQiIHkyPSI4Ni42NCIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjE0LjcxIiB5MT0iNTEuMzkiIHgyPSIxNC43MSIgeTI9Ijg2LjY0Ii8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iODguNjkiIHkxPSI5Mi4yOSIgeDI9Ijg4LjY5IiB5Mj0iMTI3LjU1Ii8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iNzkuNDUiIHkxPSI5Mi4yOSIgeDI9Ijc5LjQ1IiB5Mj0iMTI3LjU1Ii8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iNzAuMiIgeTE9IjkyLjI5IiB4Mj0iNzAuMiIgeTI9IjExNS44NSIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjYwLjk1IiB5MT0iOTUuNTMiIHgyPSI2MC45NSIgeTI9IjEyNy41NSIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjUxLjciIHkxPSI5Mi4yOSIgeDI9IjUxLjciIHkyPSIxMjcuNTUiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSI0Mi40NSIgeTE9IjkyLjI5IiB4Mj0iNDIuNDUiIHkyPSIxMjcuNTUiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSIzMy4yMSIgeTE9IjkyLjI5IiB4Mj0iMzMuMjEiIHkyPSIxMjcuNTUiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSIyMy45NiIgeTE9IjkyLjI5IiB4Mj0iMjMuOTYiIHkyPSIxMjcuNTUiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSI5Ny45NCIgeTE9IjkyLjI5IiB4Mj0iOTcuOTQiIHkyPSIxMjcuNTUiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSIxNC43MSIgeTE9IjkyLjI5IiB4Mj0iMTQuNzEiIHkyPSIxMjcuNTUiLz48cmVjdCBjbGFzcz0iY2xzLTMiIHg9IjQyLjQ1IiB5PSI3NS42MiIgd2lkdGg9IjI3Ljc0IiBoZWlnaHQ9IjguODIiLz48L3N5bWJvbD48L2RlZnM+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48dXNlIHdpZHRoPSIxMTIuNjUiIGhlaWdodD0iMTM3LjE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjkxIDAuOTEpIHNjYWxlKDAuNTQpIiB4bGluazpocmVmPSIjTmV3X1N5bWJvbF83Ii8+PC9nPjwvZz48L3N2Zz4=',
    'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjUuNTYgNzQuMjUiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNDM1MzhmO3N0cm9rZTojZmZmO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+PHN5bWJvbCBpZD0iTmV3X1N5bWJvbF84IiBkYXRhLW5hbWU9Ik5ldyBTeW1ib2wgOCIgdmlld0JveD0iMCAwIDExNy4xNSAxMzIuMDkiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyNy4xNSAxMTMuOSAyNy4xNSAyIDExNS4xNSAyIDExNS4xNSAxMTMuOSAyNy4xNSAxMTMuOSIvPjxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTA1LjM1IDkuNTggMzMuMjUgOS41OCAxNC4zMyAyMi4xMSA3Ni4xOCAyMi4xMSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI5MCAxOC4xOSAyIDE4LjE5IDIgMTMwLjA5IDkwIDEzMC4wOSAxMTUuMTUgMTE1LjU3IDExNS4xNSAzLjY3IDkwIDE4LjE5Ii8+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSIxMi4yMyIgeT0iMzQuOTMiIHdpZHRoPSIxMS43NiIgaGVpZ2h0PSIxMS43NiIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMjUuNzIiIHk9IjM0LjkzIiB3aWR0aD0iMTEuNzYiIGhlaWdodD0iMTEuNzYiLz48cmVjdCBjbGFzcz0iY2xzLTIiIHg9IjM5LjIxIiB5PSIzNC45MyIgd2lkdGg9IjExLjc2IiBoZWlnaHQ9IjExLjc2Ii8+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSIxMi4yMyIgeT0iNDguNTIiIHdpZHRoPSIxMS43NiIgaGVpZ2h0PSIxMS43NiIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMjUuNzIiIHk9IjQ4LjUyIiB3aWR0aD0iMTEuNzYiIGhlaWdodD0iMTEuNzYiLz48cmVjdCBjbGFzcz0iY2xzLTIiIHg9IjM5LjIxIiB5PSI0OC41MiIgd2lkdGg9IjExLjc2IiBoZWlnaHQ9IjExLjc2Ii8+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSI2NC40NSIgeT0iNTQuNCIgd2lkdGg9IjExLjc2IiBoZWlnaHQ9IjUuODgiLz48cmVjdCBjbGFzcz0iY2xzLTIiIHg9IjUyLjciIHk9IjM0LjkzIiB3aWR0aD0iMTEuNzYiIGhlaWdodD0iMTEuNzYiLz48L3N5bWJvbD48L2RlZnM+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48dXNlIHdpZHRoPSIxMTcuMTUiIGhlaWdodD0iMTMyLjA5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjkxIDEuNDcpIHNjYWxlKDAuNTQpIiB4bGluazpocmVmPSIjTmV3X1N5bWJvbF84Ii8+PC9nPjwvZz48L3N2Zz4=',
    'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3Ni4wOCA1OS41MiI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTN7ZmlsbDojNDM1MzhmO30uY2xzLTEsLmNscy0yLC5jbHMtM3tzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LmNscy0xLC5jbHMtMntzdHJva2Utd2lkdGg6NHB4O30uY2xzLTIsLmNscy00e2ZpbGw6I2ZmZjt9LmNscy00e2ZvbnQtc2l6ZToxOS41NHB4O2ZvbnQtZmFtaWx5OkNvdXJpZXI7bGV0dGVyLXNwYWNpbmc6LTAuMTZlbTt9LmNscy01e2xldHRlci1zcGFjaW5nOi0wLjAyZW07fS5jbHMtNntsZXR0ZXItc3BhY2luZzotMC4xNGVtO30uY2xzLTd7bGV0dGVyLXNwYWNpbmc6LTAuMjJlbTt9LmNscy04e2xldHRlci1zcGFjaW5nOi0wLjA0ZW07fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIyIiB5PSIyLjM1IiB3aWR0aD0iNzIuMDgiIGhlaWdodD0iNTUuMTciLz48cmVjdCBjbGFzcz0iY2xzLTIiIHg9IjIiIHk9IjIiIHdpZHRoPSI3Mi4wOCIgaGVpZ2h0PSI5LjE2Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTMiIGN4PSI4LjIxIiBjeT0iNi41OCIgcj0iMi45NSIvPjxjaXJjbGUgY2xhc3M9ImNscy0zIiBjeD0iMTYuMDIiIGN5PSI2LjU4IiByPSIyLjk1Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTMiIGN4PSIyMy44NCIgY3k9IjYuNTgiIHI9IjIuOTUiLz48dGV4dCBjbGFzcz0iY2xzLTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuOTQgMzkuNzMpIj4uPHRzcGFuIGNsYXNzPSJjbHMtNSIgeD0iOC42MiIgeT0iMCI+ZzwvdHNwYW4+PHRzcGFuIGNsYXNzPSJjbHMtNiIgeD0iMTkuOTciIHk9IjAiPm88L3RzcGFuPjx0c3BhbiBjbGFzcz0iY2xzLTciIHg9IjI4Ljk4IiB5PSIwIj4uPC90c3Bhbj48dHNwYW4gY2xhc3M9ImNscy01IiB4PSIzNi40MyIgeT0iMCI+ajwvdHNwYW4+PHRzcGFuIGNsYXNzPSJjbHMtOCIgeD0iNDcuNzgiIHk9IjAiPnAvPC90c3Bhbj48L3RleHQ+PC9nPjwvZz48L3N2Zz4=',
  ].map((str) => s.loadImage('data:image/svg+xml;base64,' + str));

  s.setup = () => {
    s.createCanvas(3170, 2490);
  };

  s.draw = () => {
    s.background(67, 83, 143);
    s.stroke(255);
    const d = s.frameCount;
    const dg = Math.floor(d / grid);
    s.translate(-d, -d);
    s.strokeWeight(1);
    for (let x = dg - 1; x < dg + 2 + s.width / grid; ++x) {
      for (let y = dg - 1; y < dg + 2 + s.height / grid; ++y) {
        const ox = s.noise(x, y, 1) * grid * gf;
        const oy = s.noise(x, y, 2) * grid * gf;

        const connectLeft = s.noise(x, y, 4) > 0.35;
        const connectTop = s.noise(x, y, 5) > 0.35;
        const connectLT = y % 2 === 0 && s.noise(x, y, 6) > 0.5;
        const connectRT = y % 2 === 1 && s.noise(x, y, 6) > 0.5;

        if (connectLeft) {
          const lox = s.noise(x - 1, y, 1) * grid * gf;
          const loy = s.noise(x - 1, y, 2) * grid * gf;
          s.line(
            x * grid + ox + (y % 2 ? grid / 2 : 0),
            y * grid + oy,
            (x - 1) * grid + lox + (y % 2 ? grid / 2 : 0),
            y * grid + loy,
          );
        }
        if (connectTop) {
          const tox = s.noise(x, y - 1, 1) * grid * gf;
          const toy = s.noise(x, y - 1, 2) * grid * gf;
          s.line(
            x * grid + ox + (y % 2 ? grid / 2 : 0),
            y * grid + oy,
            x * grid + tox + ((y - 1) % 2 ? grid / 2 : 0),
            (y - 1) * grid + toy,
          );
        }
        if (connectLT) {
          const ltox = s.noise(x - 1, y - 1, 1) * grid * gf;
          const ltoy = s.noise(x - 1, y - 1, 2) * grid * gf;
          s.line(
            x * grid + ox + (y % 2 ? grid / 2 : 0),
            y * grid + oy,
            (x - 1) * grid + ltox + ((y - 1) % 2 ? grid / 2 : 0),
            (y - 1) * grid + ltoy,
          );
        }
        if (connectRT) {
          const rtox = s.noise(x + 1, y - 1, 1) * grid * gf;
          const rtoy = s.noise(x + 1, y - 1, 2) * grid * gf;
          s.line(
            x * grid + ox + (y % 2 ? grid / 2 : 0),
            y * grid + oy,
            (x + 1) * grid + rtox + ((y - 1) % 2 ? grid / 2 : 0),
            (y - 1) * grid + rtoy,
          );
        }
      }
    }

    for (let x = dg - 1; x < dg + 2 + s.width / grid; ++x) {
      for (let y = dg - 1; y < dg + 2 + s.height / grid; ++y) {
        const ox = s.noise(x, y, 1) * grid * gf;
        const oy = s.noise(x, y, 2) * grid * gf;
        s.image(
          icons[Math.floor(s.noise(x, y, 3) * icons.length)],
          x * grid + ox + (y % 2 ? grid / 2 : 0) - 80,
          y * grid + oy - 80,
          160,
          160,
        );
      }
    }
  };
}, document.querySelector('.monitor.designer'));
