import React, { useState } from 'react'

export const useMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return {
        menuOpen,
        setMenuOpen
    }
}


