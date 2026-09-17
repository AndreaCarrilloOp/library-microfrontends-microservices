<template>
  <section>
    <header class="page-header">
      <div>
        <p class="eyebrow">Catalog</p>
        <h1 class="page-title">Books</h1>
        <p class="page-intro">Browse the titles in the collection.</p>
      </div>
    </header>

    <p v-if="error" class="error">{{ error }}</p>

    <ul v-else class="record-list">
      <li v-for="book in books" :key="book.id" class="record-row">
        <router-link class="record-link" :to="'/show/' + book.id">{{ book.title }}</router-link>
        <span class="record-meta">{{ book.author }} · {{ book.edition }} edition</span>
      </li>
    </ul>
  </section>
</template>

<script>
import { booksApi } from './api.js'
export default {
  data() { return { books: [], error: '' } },
  methods: {
    async allBooks() {
      try {
        const response = await fetch(booksApi + '/api/books', { headers: { Accept: 'application/json' } })
        if (!response.ok) throw new Error('Unable to load books')
        this.books = await response.json()
      } catch (err) { this.error = err.message }
    }
  },
  mounted() { this.allBooks() }
}
</script>
