"use client"
import React from 'react';
import { AppBar, Toolbar, Typography, TextField, Button, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import './globals.css';

const navItems = [
  { text: 'Home', path: '/' },
  { text: 'Master Keywords', path: '/master-keywords' },
  { text: 'Keywords', path: '/keywords' },
  { text: 'Blogs', path: '/blogs' },
  { text: 'Page 3', path: '/page3' },
  { text: 'Page 4', path: '/page4' },
  { text: 'Page 5', path: '/page5' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <html lang="en">
      <body>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Keyword Database
            </Typography>
            <TextField variant="outlined" size="small" placeholder="Search" sx={{ marginRight: 2 }} />
            <Button color="inherit">Login</Button>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          anchor="left"
          PaperProps={{
            sx: {
              width: 'auto',
              minWidth: 240,
              maxWidth: '20%', // Adjust width to be 20% of the viewport width
              top: 64, // Adjust top position based on AppBar height
            },
          }}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
          <ListItemButton onClick={() => router.push(item.path)}>
            <ListItemText primary={item.text} />
          </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main style={{ marginLeft: 240, marginTop: 64, padding: 16 }}>
          {children}
        </main>
      </body>
    </html>
  );
}