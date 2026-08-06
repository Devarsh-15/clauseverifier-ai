"""
ClauseVerifier AI — FastAPI application entry point.
"""

from __future__ import annotations

import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config import get_allowed_origins
from routers import chat, documents

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)

app = FastAPI(
    title="ClauseVerifier AI",
    description="Legal document analysis and clause risk assessment API.",
    version="1.0.0",
)

# ── CORS ───────────────────────────────────────────────────────────────────
# Allows the Vite dev server and configured production frontend origins.
app.add_middleware(
    CORSMiddleware,
    allow_origins=get_allowed_origins(),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Routers ────────────────────────────────────────────────────────────────
app.include_router(documents.router)
app.include_router(chat.router)


# ── Health check ───────────────────────────────────────────────────────────
@app.get("/health", tags=["meta"])
async def health():
    return {"status": "ok", "service": "ClauseVerifier AI", "version": "1.0.0"}
