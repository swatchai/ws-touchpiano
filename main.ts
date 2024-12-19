input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # .
        `)
    octave = -1
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . . #
        . # . . #
        . # # # #
        . # . . #
        . # . . #
        `)
    octave = 1
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    octave = 0
})
let octave = 0
led.setBrightness(25)
octave = 2
basic.showIcon(IconNames.EighthNote)
basic.pause(100)
basic.showLeds(`
    # # # . .
    # . . # .
    # # # . .
    # . . . .
    # . . . .
    `)
basic.forever(function () {
    if (octave == 0) {
        if (WSTouchPiano.TP_Press(TP_PIANO.C)) {
            WSTouchPiano.TP_PlayMusic(262, music.beat(BeatFraction.Quarter))
        } else {
            if (WSTouchPiano.TP_Press(TP_PIANO.bD)) {
                WSTouchPiano.TP_PlayMusic(277, music.beat(BeatFraction.Quarter))
            } else {
                if (WSTouchPiano.TP_Press(TP_PIANO.D)) {
                    WSTouchPiano.TP_PlayMusic(294, music.beat(BeatFraction.Quarter))
                } else {
                    if (WSTouchPiano.TP_Press(TP_PIANO.bE)) {
                        WSTouchPiano.TP_PlayMusic(311, music.beat(BeatFraction.Quarter))
                    } else {
                        if (WSTouchPiano.TP_Press(TP_PIANO.E)) {
                            WSTouchPiano.TP_PlayMusic(330, music.beat(BeatFraction.Quarter))
                        } else {
                            if (WSTouchPiano.TP_Press(TP_PIANO.F)) {
                                WSTouchPiano.TP_PlayMusic(349, music.beat(BeatFraction.Quarter))
                            } else {
                                if (WSTouchPiano.TP_Press(TP_PIANO.bG)) {
                                    WSTouchPiano.TP_PlayMusic(370, music.beat(BeatFraction.Quarter))
                                } else {
                                    if (WSTouchPiano.TP_Press(TP_PIANO.G)) {
                                        WSTouchPiano.TP_PlayMusic(392, music.beat(BeatFraction.Quarter))
                                    } else {
                                        if (WSTouchPiano.TP_Press(TP_PIANO.bA)) {
                                            WSTouchPiano.TP_PlayMusic(415, music.beat(BeatFraction.Quarter))
                                        } else {
                                            if (WSTouchPiano.TP_Press(TP_PIANO.A)) {
                                                WSTouchPiano.TP_PlayMusic(440, music.beat(BeatFraction.Quarter))
                                            } else {
                                                if (WSTouchPiano.TP_Press(TP_PIANO.bB)) {
                                                    WSTouchPiano.TP_PlayMusic(466, music.beat(BeatFraction.Quarter))
                                                } else {
                                                    if (WSTouchPiano.TP_Press(TP_PIANO.B)) {
                                                        WSTouchPiano.TP_PlayMusic(494, music.beat(BeatFraction.Quarter))
                                                    } else {
                                                        if (WSTouchPiano.TP_Press(TP_PIANO.C1)) {
                                                            WSTouchPiano.TP_PlayMusic(523, music.beat(BeatFraction.Quarter))
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (octave == -1) {
        if (WSTouchPiano.TP_Press(TP_PIANO.C)) {
            WSTouchPiano.TP_PlayMusic(131, music.beat(BeatFraction.Quarter))
        } else {
            if (WSTouchPiano.TP_Press(TP_PIANO.bD)) {
                WSTouchPiano.TP_PlayMusic(139, music.beat(BeatFraction.Quarter))
            } else {
                if (WSTouchPiano.TP_Press(TP_PIANO.D)) {
                    WSTouchPiano.TP_PlayMusic(147, music.beat(BeatFraction.Quarter))
                } else {
                    if (WSTouchPiano.TP_Press(TP_PIANO.bE)) {
                        WSTouchPiano.TP_PlayMusic(156, music.beat(BeatFraction.Quarter))
                    } else {
                        if (WSTouchPiano.TP_Press(TP_PIANO.E)) {
                            WSTouchPiano.TP_PlayMusic(165, music.beat(BeatFraction.Quarter))
                        } else {
                            if (WSTouchPiano.TP_Press(TP_PIANO.F)) {
                                WSTouchPiano.TP_PlayMusic(175, music.beat(BeatFraction.Quarter))
                            } else {
                                if (WSTouchPiano.TP_Press(TP_PIANO.bG)) {
                                    WSTouchPiano.TP_PlayMusic(185, music.beat(BeatFraction.Quarter))
                                } else {
                                    if (WSTouchPiano.TP_Press(TP_PIANO.G)) {
                                        WSTouchPiano.TP_PlayMusic(196, music.beat(BeatFraction.Quarter))
                                    } else {
                                        if (WSTouchPiano.TP_Press(TP_PIANO.bA)) {
                                            WSTouchPiano.TP_PlayMusic(208, music.beat(BeatFraction.Quarter))
                                        } else {
                                            if (WSTouchPiano.TP_Press(TP_PIANO.A)) {
                                                WSTouchPiano.TP_PlayMusic(220, music.beat(BeatFraction.Quarter))
                                            } else {
                                                if (WSTouchPiano.TP_Press(TP_PIANO.bB)) {
                                                    WSTouchPiano.TP_PlayMusic(233, music.beat(BeatFraction.Quarter))
                                                } else {
                                                    if (WSTouchPiano.TP_Press(TP_PIANO.B)) {
                                                        WSTouchPiano.TP_PlayMusic(247, music.beat(BeatFraction.Quarter))
                                                    } else {
                                                        if (WSTouchPiano.TP_Press(TP_PIANO.C1)) {
                                                            WSTouchPiano.TP_PlayMusic(262, music.beat(BeatFraction.Quarter))
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (octave == 1) {
        if (WSTouchPiano.TP_Press(TP_PIANO.C)) {
            WSTouchPiano.TP_PlayMusic(523, music.beat(BeatFraction.Quarter))
        } else {
            if (WSTouchPiano.TP_Press(TP_PIANO.bD)) {
                WSTouchPiano.TP_PlayMusic(554, music.beat(BeatFraction.Quarter))
            } else {
                if (WSTouchPiano.TP_Press(TP_PIANO.D)) {
                    WSTouchPiano.TP_PlayMusic(587, music.beat(BeatFraction.Quarter))
                } else {
                    if (WSTouchPiano.TP_Press(TP_PIANO.bE)) {
                        WSTouchPiano.TP_PlayMusic(622, music.beat(BeatFraction.Quarter))
                    } else {
                        if (WSTouchPiano.TP_Press(TP_PIANO.E)) {
                            WSTouchPiano.TP_PlayMusic(659, music.beat(BeatFraction.Quarter))
                        } else {
                            if (WSTouchPiano.TP_Press(TP_PIANO.F)) {
                                WSTouchPiano.TP_PlayMusic(698, music.beat(BeatFraction.Quarter))
                            } else {
                                if (WSTouchPiano.TP_Press(TP_PIANO.bG)) {
                                    WSTouchPiano.TP_PlayMusic(740, music.beat(BeatFraction.Quarter))
                                } else {
                                    if (WSTouchPiano.TP_Press(TP_PIANO.G)) {
                                        WSTouchPiano.TP_PlayMusic(784, music.beat(BeatFraction.Quarter))
                                    } else {
                                        if (WSTouchPiano.TP_Press(TP_PIANO.bA)) {
                                            WSTouchPiano.TP_PlayMusic(831, music.beat(BeatFraction.Quarter))
                                        } else {
                                            if (WSTouchPiano.TP_Press(TP_PIANO.A)) {
                                                WSTouchPiano.TP_PlayMusic(880, music.beat(BeatFraction.Quarter))
                                            } else {
                                                if (WSTouchPiano.TP_Press(TP_PIANO.bB)) {
                                                    WSTouchPiano.TP_PlayMusic(932, music.beat(BeatFraction.Quarter))
                                                } else {
                                                    if (WSTouchPiano.TP_Press(TP_PIANO.B)) {
                                                        WSTouchPiano.TP_PlayMusic(988, music.beat(BeatFraction.Quarter))
                                                    } else {
                                                        if (WSTouchPiano.TP_Press(TP_PIANO.C1)) {
                                                            WSTouchPiano.TP_PlayMusic(1045, music.beat(BeatFraction.Quarter))
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        WSTouchPiano.TP_PlayPiano()
    }
})
