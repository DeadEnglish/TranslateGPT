# TranslateGPT

Ever need to translate something via openAI? well now you can. using the `simple` i18n format you can easily translate text to any language you want.

> [!NOTE]
> This is something I threw togther in 15 minutes, it's not perfect and it's not the best way to do this. but it works and it's simple.

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. 


### Prerequisites

Requirements for the software and other tools to build, test and push 
- [An OpenAI api key](https://openai.com)
- [ A file in the `simple` i18n format ](https://formatjs.io/docs/tooling/cli)

### Installing

install depencandies with bun
```bash
    bun install
```
add your openAI api key to the `.env` file
```bash
    OPENAI_API_KEY=your-api-key
```
add you default language file, currently this is set to "english" and should be in the `en.jso` file

update the languages to the ones you support
```typescript
    const languages = ["en", "es", "fr", "de", "it", "ja", "ko", "pt", "ru", "zh"];
```
run the `index.ts` file
```bash
    bun run index.ts
```

## Built With

   - [Bun](https://https://bun.sh/) - build tool 


## Authors

  - **Liam Canetti** - *Yes* -
    [DeadEnglish](https://github.com/DeadEnglish)

