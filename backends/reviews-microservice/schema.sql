DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  id TEXT PRIMARY KEY,
  book_id TEXT NOT NULL,
  book_title TEXT NOT NULL,
  reviewer TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment TEXT NOT NULL
);
INSERT INTO reviews (id, book_id, book_title, reviewer, rating, comment) VALUES
('1','1','Operating System Concepts','Ana',5,'Clear and complete reference for operating systems.'),
('2','2','Database System Concepts','Carlos',4,'Strong introduction to database concepts and design.'),
('3','3','Computer Networks','Sofia',5,'Very useful explanations of networking fundamentals.'),
('4','4','Modern Operating Systems','Daniel',4,'Good coverage of modern operating system concepts.');
