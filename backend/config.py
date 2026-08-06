from pathlib import Path

from pydantic_settings import BaseSettings


BASE_DIR = Path(__file__).resolve().parent


class Settings(BaseSettings):
    # AI provider keys
    groq_api_key: str = ""
    openrouter_api_key: str = ""

    # Comma-separated frontend origins allowed to call this API in production.
    cors_origins: str = ""

    # Model selection
    groq_model: str = "llama-3.3-70b-versatile"
    openrouter_model: str = "deepseek/deepseek-chat"

    # Retrieval / chunking parameters
    max_chunk_size: int = 500          # words per chunk
    chunk_overlap: int = 50            # words overlapping between chunks
    max_chunks_for_retrieval: int = 5  # top-k chunks injected into chat context

    class Config:
        env_file = BASE_DIR / ".env"


settings = Settings()


def get_allowed_origins() -> list[str]:
    local_origins = [
        "http://localhost:5173",
        "http://localhost:3000",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:3000",
    ]
    deploy_origins = [
        origin.strip().rstrip("/")
        for origin in settings.cors_origins.split(",")
        if origin.strip()
    ]
    return [*local_origins, *deploy_origins]
