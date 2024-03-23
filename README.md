# divinity.vip <img src="/public/apple-touch-icon.png" style="width:30px" />

share anonymous confessions, advice, and stories. no authentication required

built with **[Nextjs](https://nextjs.org/)** & **[firebase](https://firebase.google.com/)**

---

## how it works

- input within a `<form />` element

```ts
const Form = ({ ...props }) => {
  return (
    <form {...props} onSubmit={props.onSubmit}>
      <textarea id="post" name="post" required />
      <button type="submit">submit</button>
    </form>
  );
};
```

- `onSubmit()` function

```ts
async function onSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  try {
    await createPost(formData);
  } catch (err) {
    // ...
  }
}
```

- pass it to the form

```ts
return <Form onSubmit={onSubmit} />;
```

- within server actions, an asynchronous function to add the post to the database

```ts
"use server";

export async function createPost(formData: FormData, postId: string) {
  const content = formData.get("post");

  //...

  const post = {
    content: content,
  };

  try {
    await setDoc(doc(db, "posts", postId), post);
  } catch (e) {
    //...
  }
}
```
