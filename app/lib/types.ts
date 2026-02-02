/* =========================
   USER & AUTH TYPES
========================= */

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  createdAt?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface ForgotPasswordData {
  email: string;
}

/* =========================
   FLASHCARD DOMAIN TYPES
========================= */

export type Difficulty = "easy" | "medium" | "hard";

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  difficulty: Difficulty;
}

export interface Deck {
  id: string;
  title: string;
  description?: string;
  cards: Flashcard[];
  createdAt?: string;
}

/* =========================
   COMPONENT PROP TYPES
========================= */

/* ---- Auth Components ---- */
export interface LoginFormProps {
  onSubmit: (data: LoginCredentials) => void;
  loading?: boolean;
}

export interface SignupFormProps {
  onSubmit: (data: SignupData) => void;
  loading?: boolean;
}

export interface ForgotPasswordFormProps {
  onSubmit: (data: ForgotPasswordData) => void;
  loading?: boolean;
}

/* ---- Flashcard Components ---- */
export interface DeckMenuProps {
  decks: Deck[];
  onSelectDeck: (deckId: string) => void;
}

export interface DeckManagementProps {
  deck: Deck;
  onAddCard: (card: Flashcard) => void;
  onDeleteCard: (cardId: string) => void;
}

export interface CardViewProps {
  card: Flashcard;
  onNext?: () => void;
}

export interface LevelsListProps {
  currentLevel: Difficulty;
  onLevelChange: (level: Difficulty) => void;
}
