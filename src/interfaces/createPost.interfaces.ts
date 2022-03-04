export interface CreatePostFormDataI {
  title: string;
  body: string;
}

export interface CreatePostInputI {
  variables: {
    input: CreatePostFormDataI;
  };
}
