# Logbook

## Entries

### Mar 29 2023 // Dynamically reading checkbox state

1. Added a README.md for adding converters.

- Still need to figure out where to put "user generated folder"

2. Added `getInitialCheckboxState` to pull in proper state from config.
3. Updated UI to pull in proper checkbox state.
4. Likely can skip reading URL Params for now.

**TODO NEXT**

1. Clean up Checkbox state UI
2. Get checkboxes working for Output box as well.
3. Rename `getInitialCheckboxState` to `getInitialConfigState`, make it work for numbered inputs too.
4. Code JsonCsv conversion.

---

### Mar 30 2023 // Checkboxes++

~~1. Clean up Checkbox state UI~~
~~2. Get checkboxes working for Output box as well.~~

Started getting numbered inputs in fileSettingsState

**TODO NEXT**

1. Rename `getInitialCheckboxState` to `getInitialConfigState`, make it work for numbered inputs too.
2. Code JsonCsv conversion.

---

### Mar 31 2023 // New state passed through + nums + checboxess

#### Task

1. Rename `getInitialCheckboxState` to `getInitialConfigState`, make it work for numbered inputs too.

#### Notes

Working on the numbered inputs state.
\
\
This turned out to be a bit harder then I imagined.
\
\
Yesterday, while walking, I realized I should make the input/output ConverterConfigs into something like a `FileSettingsSections`. These being (ordered) arrays of inputs that can be grouped under one heading. i.e Spacing Settings: [NumberedInput, CheckboxInput]. This way people can put multiple sections of inputs, that relate to eachother, under one heading, always in a specific order.
\
\
Much smarter than my plan of all numbered inputs in one place and all checkboxes in another.
\
\
There are 2 caveats, which I think are worth it, to have so we can have sections / ordering.

- I can't easily grab individual keys anymore for individual inputs, they're in an array.
- Same goes for people making converters.

As I started building this, I realized 2 things again:

1. I was passing a lot of state through components, and not really using it. I needed the state to atleast be up in the Converter, not in the FileSettings.
2. I needed to unify the config of the `ConverterConfig` to the state of the UI. I needed the state to atleast be up in the Converter, not in the FileSettings.

**Solving Above: Passing state through components: Prop Drilling, unifying the state**
\
First I though that a state manager would be perfect for this, so I gave zustand a try. Unfortunately, it looks really crazy if you're working with nested objects in state. Note from later: I guess this is all react! They hate nested state, so maybe immer is worth it.
\
So I decided to just continue doing it in a simple way by passing through state. This worked, but it results in some very tough moments and weird looking code. I basically have to pass both fileSettings state and setState function into FileSettings, wrap it in a way that only updates the correct setting (found in the array), then send it to each function.
\
The result is, that the state is unified with `FileSettingsSections`. That's the state that is stored in the UI. When you click a fileSettingInput, there is an `onChange` on the input which updates the state.
\
I'm happy with this, but i think its a bit fiddly to update, and may be worth exploring the idea of using a `Context` that's local to the `ConverterPage` if its ok at changing objects.
\
\
**Other Notes**
- It's crazy how much I'm changing type names. And they're still not perfect names, like I can't recollect them on the fly.
- I deleted a bunch of fancy code to generate the `FileSettings` in a simpler way, because I wanted to unify the state at the top level, down to the individual `FileSetting` component. Hopefully this was right.
- I love JSDoc. So smart for maintainability.


**Part 2:**
~~1. Clean up the code that passes state through to FileSettings. Fix some types as well.~~
   ~~1. Iterate through all passed sections~~
#### TODO NEXT

2. Code JsonCsv conversion.
