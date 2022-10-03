import React, { useState } from 'react'
import Layout from '@theme/Layout'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { ethers } from 'ethers'

export default function UnitConverter() {
    const [etherAmount, setEtherAmount] = useState(0)
    const [gweiAmount, setGweiAmount] = useState(0)
    const [weiAmount, setWeiAmount] = useState(0)

    // utils
    const removeLeadingZeros = (s) => {
        const oldLen = s.length
        s = s.replace(/^0+/, '')

        if (s.length === 0 && oldLen > 0) {
            s = ''
        }
        return s
    }

    const parseEther = (amount) => {
        return ethers.utils.parseEther(amount)
    }

    const formatEther = (amount) => {
        return ethers.utils.formatEther(amount)
    }

    const formatGwei = (amount) => {
        // gwei is 9 decimals
        return ethers.utils.formatUnits(amount, 9)
    }

    const parseGwei = (amount) => {
        return ethers.utils.parseUnits(amount, 9)
    }

    const onEtherInput = (e) => {
        if (e.target.value === '') return ''
        else if (e.target.value < 0) return ''
        let value = e.target.value.toString()
        // console.log(toWei(value.toString()))
        value = removeLeadingZeros(value)
        setEtherAmount(value)
        setWeiAmount(parseEther(value))
        setGweiAmount(parseGwei(value))
    }

    const onGweiInput = (e) => {
        if (e.target.value === '') return ''
        else if (e.target.value < 0) return ''
        let value = e.target.value
        // console.log(toWei(value.toString()))
        value = removeLeadingZeros(value)
        setGweiAmount(value)
        setWeiAmount(parseGwei(value))
        setEtherAmount(formatGwei(value))
    }

    const onWeiInput = (e) => {
        if (e.target.value === '') return ''
        else if (e.target.value < 0) return ''
        // console.log(toWei(value.toString()))
        let value = e.target.value
        value = removeLeadingZeros(value)
        setWeiAmount(value)
        setGweiAmount(formatGwei(value))
        setEtherAmount(formatEther(value))
    }

    return (
        <Layout title="Hello" description="Ethereum Unit Converter">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '60vh',
                    fontSize: '20px',
                }}
            >
                <Card sx={{ minWidth: 480 }}>
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 20, fontWeight: 'bold' }}
                            color="text.secondary"
                            gutterBottom
                        >
                            Ethereum Unit Converter
                        </Typography>
                        <div>
                            <TextField
                                id="outlined-number"
                                label="Ether"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    inputMode: 'numeric',
                                    pattern: '[0-9]*',
                                }}
                                value={etherAmount}
                                size="small"
                                margin="normal"
                                fullWidth
                                onChange={onEtherInput}
                                placeholder="Ether"
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-number"
                                label="Gwei"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    inputMode: 'numeric',
                                    pattern: '[0-9]*',
                                }}
                                value={gweiAmount}
                                size="small"
                                margin="normal"
                                fullWidth
                                onChange={onGweiInput}
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-number"
                                label="Wei"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    inputMode: 'numeric',
                                    pattern: '[0-9]*',
                                }}
                                value={weiAmount}
                                size="small"
                                margin="normal"
                                fullWidth
                                onChange={onWeiInput}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    )
}
