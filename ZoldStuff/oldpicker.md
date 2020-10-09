const categories=[
  {label:"Medical", value:1},
  {label:"Surgery", value:2},
  {label:"ICU", value:3},
]

export default function App() {
  const [category, setCategory] = useState()
  console.log("render", category);
  return (
    <Screen>
        <AppPicker 
          selectedItem={category}
          onSelectItem={item=>setCategory(item)}
          items={categories} icon="apps" placeholder="Category"/>
        <AppTextInput icon="email" placeholder="Email"/>
    </Screen>
  );
}