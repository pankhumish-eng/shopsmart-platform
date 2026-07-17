from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.user import User
from app.schemas.user import UserRegister, UserResponse
from app.utils.security import hash_password


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
)
def register_user(
    user_data: UserRegister,
    database: Session = Depends(get_db),
):
    existing_user = (
        database.query(User)
        .filter(User.email == user_data.email)
        .first()
    )

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="An account with this email already exists.",
        )

    new_user = User(
        full_name=user_data.full_name.strip(),
        email=user_data.email.lower(),
        password=hash_password(user_data.password),
    )

    database.add(new_user)
    database.commit()
    database.refresh(new_user)

    return new_user