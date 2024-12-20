# Alfa-Agency

## Uso de tipografias en Tailwind CSS con Avarta

Aquí tienes una guía de las clases de Tailwind CSS para controlar las propiedades relacionadas con fuentes (`font-`) que puedes usar en tus `<span>` o cualquier otro elemento de texto en HTML:

### 1. **`font-family`**
   - **`font-sans`**: Fuente sans-serif.
   - **`font-serif`**: Fuente serif.
   - **`font-mono`**: Fuente monoespaciada.
   
   ```html
   <span class="font-sans">Texto sans-serif</span>
   ```

### 2. **`font-size`**
   Las clases de tamaño de fuente van desde `text-xs` hasta `text-9xl`.
   - **`text-xs`**: Extra pequeña.
   - **`text-sm`**: Pequeña.
   - **`text-base`**: Base (normal).
   - **`text-lg`**: Grande.
   - **`text-xl`, `text-2xl`, ..., `text-9xl`**: Tamaños extra grandes.
   
   ```html
   <span class="text-2xl">Texto grande</span>
   ```

### 3. **`font-weight`**
   Controla el grosor del texto.
   - **`font-thin`**: Muy delgada.
   - **`font-extralight`**: Extra delgada.
   - **`font-light`**: Delgada.
   - **`font-normal`**: Normal.
   - **`font-medium`**: Media.
   - **`font-semibold`**: Semi-negrita.
   - **`font-bold`**: Negrita.
   - **`font-extrabold`**: Extra negrita.
   - **`font-black`**: Muy gruesa.
   
   ```html
   <span class="font-bold">Texto en negrita</span>
   ```

### 4. **`font-style`**
   Controla si el texto es normal o cursivo.
   - **`italic`**: Hace el texto en cursiva.
   - **`not-italic`**: Remueve la cursiva si está aplicada por otro estilo.
   
   ```html
   <span class="italic">Texto en cursiva</span>
   <span class="not-italic">Texto sin cursiva</span>
   ```

### 5. **`font-variant`**
   Controla el uso de mayúsculas pequeñas.
   - **`normal-case`**: Texto en el caso normal.
   - **`uppercase`**: Convierte el texto a mayúsculas.
   - **`lowercase`**: Convierte el texto a minúsculas.
   - **`capitalize`**: Capitaliza la primera letra de cada palabra.
   
   ```html
   <span class="uppercase">TEXTO EN MAYÚSCULAS</span>
   ```

### 6. **`line-height` (leading)**
   Controla el espacio entre líneas del texto.
   - **`leading-none`**: Sin espacio adicional entre líneas.
   - **`leading-tight`**: Espacio de línea ajustado.
   - **`leading-snug`**: Espacio de línea algo ajustado.
   - **`leading-normal`**: Espacio de línea normal.
   - **`leading-relaxed`**: Espacio de línea relajado.
   - **`leading-loose`**: Espacio de línea amplio.

   ```html
   <span class="leading-loose">Texto con espacio entre líneas amplio</span>
   ```

### 7. **`letter-spacing` (tracking)**
   Ajusta el espacio entre caracteres.
   - **`tracking-tighter`**: Muy ajustado.
   - **`tracking-tight`**: Ajustado.
   - **`tracking-normal`**: Normal.
   - **`tracking-wide`**: Separación amplia.
   - **`tracking-wider`**: Más amplia.
   - **`tracking-widest`**: La separación más amplia.
   
   ```html
   <span class="tracking-widest">Texto con mucho espacio entre letras</span>
   ```

### Ejemplo Completo

Aquí tienes un ejemplo que aplica varios de estos estilos en un solo `<span>`:

```html
<h1 class="text-3xl md:text-4xl lg:text-5xl mb-4">
    Cómo conseguir que tu clínica <span class="lg:text-5xl font-bold not-italic uppercase tracking-wide">GENERE</span>
</h1>
```


    