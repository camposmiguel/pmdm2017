package com.miguelcr.a01_tresenraya;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class BoardActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_board);

        // Rescatar los nombres de los jugadores
        Bundle extras = getIntent().getExtras();

        String p1Name = extras.getString(Constantes.EXTRA_PLAYER_1);
        String p2Name = extras.getString(Constantes.EXTRA_PLAYER_2);


    }
}
