<template>
  <section>
    <p v-if="error" class="error">{{ error }}</p>

    <template v-else>
      <header class="page-header">
        <div>
          <p class="eyebrow">Book detail</p>
          <h1 class="page-title">{{ book.title }}</h1>
          <p class="page-intro">{{ book.edition }} edition · {{ book.language }}</p>
        </div>
      </header>

      <div class="detail-panel">
        <dl class="detail-grid">
          <div class="detail-item"><dt>ID</dt><dd>{{ book.id }}</dd></div>
          <div class="detail-item"><dt>Copyright</dt><dd>{{ book.copyright }}</dd></div>
          <div class="detail-item"><dt>Edition</dt><dd>{{ book.edition }}</dd></div>
          <div class="detail-item"><dt>Pages</dt><dd>{{ book.pages }}</dd></div>
          <div class="detail-item"><dt>Language</dt><dd>{{ book.language }}</dd></div>
          <div class="detail-item"><dt>Author</dt><dd><a :href="authorsMinisite + '/#/show/' + book.author_id">{{ book.author }}</a></dd></div>
          <div class="detail-item"><dt>Publisher</dt><dd><a :href="publishersMinisite + '/#/show/' + book.publisher_id">{{ book.publisher }}</a></dd></div>
          <div class="detail-item"><dt>Reviews</dt><dd><a :href="reviewsMinisite + '/#/book/' + book.id">View reviews</a></dd></div>
        </dl>
      </div>

      <div class="action-row">
        <router-link class="button button-primary" to="/">Back to books</router-link>
      </div>
    </template>
  </section>
</template>

<script>
import { booksApi, authorsMinisite, publishersMinisite, reviewsMinisite } from './api.js'
export default {
  props: ['id'],
  data() {
    return {
      book: { id: '', title: '', edition: '', copyright: '', language: '', pages: '', author: '', author_id: '', publisher: '', publisher_id: '' },
      authorsMinisite, publishersMinisite, reviewsMinisite, error: ''
    }
  },
  created() { this.findBook(this.id) },
  methods: {
    async findBook(id) {
      try {
        const response = await fetch(booksApi + '/api/books/' + id, { headers: { Accept: 'application/json' } })
        if (!response.ok) throw new Error('Book not found')
        this.book = await response.json()
      } catch (err) { this.error = err.message }
    }
  }
}
</script>
