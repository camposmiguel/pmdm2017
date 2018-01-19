package com.miguelcr.a01_tresenraya;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

public class BoardActivity extends AppCompatActivity implements View.OnClickListener {
    TextView textViewPlayer1, textViewPlayer2;
    ImageView iv0, iv1, iv2, iv3, iv4, iv5, iv6, iv7, iv8;
    boolean isPlaying1 = true;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_board);

        // Nombres jugadores
        textViewPlayer1 = findViewById(R.id.textViewP1);
        textViewPlayer2 = findViewById(R.id.textViewP2);
        iv0 = findViewById(R.id.imageView0);
        iv1 = findViewById(R.id.imageView1);
        iv2 = findViewById(R.id.imageView2);
        iv3 = findViewById(R.id.imageView3);
        iv4 = findViewById(R.id.imageView4);
        iv5 = findViewById(R.id.imageView5);
        iv6 = findViewById(R.id.imageView6);
        iv7 = findViewById(R.id.imageView7);
        iv8 = findViewById(R.id.imageView8);

        // Rescatar los nombres de los jugadores
        Bundle extras = getIntent().getExtras();

        String p1Name = extras.getString(Constantes.EXTRA_PLAYER_1);
        String p2Name = extras.getString(Constantes.EXTRA_PLAYER_2);

        String idiomaUsuario = getString(R.string.idioma);


        textViewPlayer1.setText(p1Name);
        textViewPlayer2.setText(p2Name);

        eventListeners();

    }

    // Este método defini todos los event listeners de mi Activity
    private void eventListeners() {
        iv0.setOnClickListener(this);
        iv1.setOnClickListener(this);
        iv2.setOnClickListener(this);
        iv3.setOnClickListener(this);
        iv4.setOnClickListener(this);
        iv5.setOnClickListener(this);
        iv6.setOnClickListener(this);
        iv7.setOnClickListener(this);
        iv8.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        int idCasilla = v.getId();
        ImageView casillaSeleccionada = null;

        switch (idCasilla) {
            case R.id.imageView0:
                casillaSeleccionada = iv0;
                break;
            case R.id.imageView1:
                casillaSeleccionada = iv1;
                break;
            case R.id.imageView2:
                casillaSeleccionada = iv2;
                break;
            case R.id.imageView3:
                casillaSeleccionada = iv3;
                break;
            case R.id.imageView4:
                casillaSeleccionada = iv4;
                break;
            case R.id.imageView5:
                casillaSeleccionada = iv5;
                break;
            case R.id.imageView6:
                casillaSeleccionada = iv6;
                break;
            case R.id.imageView7:
                casillaSeleccionada = iv7;
                break;
            case R.id.imageView8:
                casillaSeleccionada = iv8;
                break;

        }

        // Le cambio la imagen a la casilla sobre
        // la que se ha hecho click
        if(isPlaying1) {
            casillaSeleccionada.setImageResource(R.drawable.ic_player_1);
        } else {
            casillaSeleccionada.setImageResource(R.drawable.ic_player_2);
        }

        isPlaying1 = !isPlaying1;
    }
}
